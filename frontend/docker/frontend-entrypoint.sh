#!/usr/bin/env sh
set -eu

BACKEND_HOST="${BACKEND_HOST:-backend}" \
BACKEND_PORT="${BACKEND_PORT:-3201}" \
envsubst '${BACKEND_HOST} ${BACKEND_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

CONFIG_FILE='/usr/share/nginx/html/config.js'
PREFIX='RETRO_'

makeSedCommands() {
  printenv | \
      grep  "^$PREFIX" | \
      sed -r "s/=/ /g" | \
      xargs -n 2 sh -c 'echo "    \"$0\": \"$1\","'
}

# Set the delimiter to newlines (needed for looping over the function output)
IFS=$'\n'

echo "window.__env__ = {" > "${CONFIG_FILE}"
for c in $(makeSedCommands); do
  echo $c >> "${CONFIG_FILE}"
done
truncate -s -2 "${CONFIG_FILE}"
echo "\n};" >> "${CONFIG_FILE}"

sed -i "s#\"${PREFIX}#\"#g" "${CONFIG_FILE}"

# Run any arguments passed to this script
exec "$@"
