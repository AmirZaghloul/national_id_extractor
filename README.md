# National ID data extractor

This extractor offers an API that receives National Egyptian IDs to validate and extract data from it like birthdate, gender, governorate and birth order according to [this WIKI](https://ar.wikipedia.org/wiki/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9#:~:text=%D8%A7%D9%84%D8%B1%D9%91%D9%82%D9%85%20%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A%20%D8%B1%D9%82%D9%85%20%D9%81%D8%B1%D9%8A%D8%AF%20%D9%84%D9%83%D9%84%D9%91,%D8%A7%D9%84%D8%B1%D9%82%D9%85%D8%A7%D9%86%20%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A%D8%A7%D9%86%3A%20%D8%B1%D9%82%D9%85%D8%A7%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D9%85%D9%8A%D9%84%D8%A7%D8%AF.)

## Prerequisites
* Docker (If you want to run the dockerized version)
* Docker Compose (If you want to run the dockerized version)
* NodeJS (If you want to run the project manually)

## Installation (Docker)

```bash
docker-compose up
```

## Installation (Basic)

```bash
npm install
npm start
```
## Usage (bash)

```bash
curl http://localhost:3000/national_id
```

## Usage (postman)

Send a get request to `http://localhost:3000/national_id`

## Response Sample
`curl http://localhost:3000/30001010100055`
```json
{
    "data": {
        "birth_date": "01/01/2000",
        "governorate": "Cairo",
        "birth_order": "0005",
        "gender": "Male"
    }
}

```
