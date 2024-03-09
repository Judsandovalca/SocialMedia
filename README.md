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

### ./FrontEnd

To run this project, you will need to add the following environment variables to your `.env.development` file inside the `./client` folder

-   `VITE_BACKEND_URL` - Url to connect the backend (usually is [http://localhost:8000](http://localhost:8000))
-
-   `VITE_PRORUCTS_URL` - Url to connect the fake products api [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

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

