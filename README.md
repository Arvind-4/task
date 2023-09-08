## 📦 Tech Stack:

- [Express Js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Node.js](https://nodejs.org/en/) - Node.js is an open-source, cross-platform JavaScript runtime environment.
- [Typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [Yup](https://github.com/jquense/yup) - Dead simple Object schema validation.
- [Cyclic sh](https://www.cyclic.sh) - Deploy Fullstack Javascript Apps: Front-end, Backend, Database, Scheduled tasks. All running with zero-config.


## Test Endpoint:

- **POST to /bfhl**
```shell
 curl -H 'Content-Type: application/json' \
      -d '{ "name": "Don", "dob": "12/08/2002",	"email": "aa2@h.com", "roll_number": "89898229", "data": ["M","1","334","4","B", 2, 90, "89", "K"]}' \
      -X POST \
      https://tense-waistcoat-calf.cyclic.app/bfhl
```
Response:
```
{
  "is_status": true,
  "user_id": "don_12082002",
  "email": "aa2@h.com",
  "roll_number": "89898229",
  "numbers": [
    1,
    334,
    4,
    2,
    90,
    89
  ],
  "alphabets": [
    "M",
    "K",
    "B"
  ],
  "highest_alphabet": [
    "M"
  ]
}
```

- **GET /bfhl**
```
curl https://tense-waistcoat-calf.cyclic.app/bfhl
```
Response :
```
{
  "is_status": true,
  "operation_code": 1
}
``` 

## Getting Started: 

- Clone Repo 

```bash
mkdir  tasks
cd  tasks
git  clone https://github.com/Arvind-4/task .
```  

- Install Dependencies 

```bash
npm  install
```

- Run Dev Server 

```bash
npm  run  dev
```