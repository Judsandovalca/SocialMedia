# SocialMedia

## MEAN 

Made using with Node v20.11.1


## Environment Variables

### ./BackEnd

To run this project, you will need to add the following environment variables to your .env file inside the backend folder, use the template as example


Also you will need to change you cluster_id and provider:

```js

@<your_cluster_name>.<your_cluster_provider>.mongodb.net

```

located at the `config/config.ts` file:

```js
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@<your_cluster_name>.<your_cluster_provider>.mongodb.net/db`;
```

## Setup

### Backend
In order to run the backend:


cd backend


npm i


create a new .env file following the template example in order to connect to MongoDB


npm start

### Frontend
To test the frontend, you need to use the following commands:


npm i


ng serve
```

