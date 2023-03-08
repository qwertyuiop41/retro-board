#!/usr/bin/env sh
set -eu

BACKEND_HOST="${BACKEND_HOST:-backend}" \
BACKEND_PORT="${BACKEND_PORT:-3201}" \
envsubst '${BACKEND_HOST} ${BACKEND_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

CONFIG_FILE='./config.tmp'
HTML_FILE='/usr/share/nginx/html/index.html'
PREFIX='FRONTEND_'

echo "    window.__env__ = {" > "${CONFIG_FILE}"
jq -n 'env' | grep "\"$PREFIX" >> "${CONFIG_FILE}"
echo "    };" >> "${CONFIG_FILE}"
sed -i "s#\"${PREFIX}#    \"#g" "${CONFIG_FILE}"

sed -i -e "/RUN-TIME CONFIGURATION/r ${CONFIG_FILE}" ${HTML_FILE}

exec "$@"
