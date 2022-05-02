# Dependencies

## Deps to not update

### Backend

- Chalk: 4.1.2 (until TypeScript supports ESM imports)
- node-fetch: 2.6.7 (same reason)
- @types/node-fetch: 2.5.12
- redis 3.1.2 (new version incompatible with express-redis)
- passport 0.5.0 (new version, including 0.5.2 breaks set user when using Docker, but not locally)

### Regex

translations\.(([a-zA-Z_]*\.)*[a-zA-Z_]*)

to 

t('$1')


import useTranslations from .*translations';

to 

import { useTranslation } from 'react-i18next';




const .* = useTranslations\(\);

to

const { t } = useTranslation();



case '(.*)':\n.*return `(.*)`;

to 

"error_$1": "$2",


postTranslations\.([a-zA-Z]*)!?
t('AuthCommon.$1')