// Document - https://apidocs.bithumb.com/reference/%EB%A7%88%EC%BC%93%EC%BD%94%EB%93%9C-%EC%A1%B0%ED%9A%8C

import bithumbApiDocs from '@api/bithumb-api-docs';

bithumbApiDocs.({isDetails: 'false'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));