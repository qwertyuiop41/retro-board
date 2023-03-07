#!/usr/bin/env sh
set -eu

BACKEND_HOST="${BACKEND_HOST:-backend}" \
BACKEND_PORT="${BACKEND_PORT:-3201}" \
envsubst '${BACKEND_HOST} ${BACKEND_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

CONFIG_FILE='/usr/share/nginx/html/config.js'
PREFIX='FRONTEND_'

echo "window.__env__ = {" > "${CONFIG_FILE}"
jq -n 'env' | grep "\"$PREFIX" >> "${CONFIG_FILE}"
truncate -s -2 "${CONFIG_FILE}"
echo "\n};" >> "${CONFIG_FILE}"
sed -i "s#\"${PREFIX}#\"#g" "${CONFIG_FILE}"

exec "$@"
