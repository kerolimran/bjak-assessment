# bjak-assessment

Online Cupcake store

## Installation 

### Install backend with npm

```bash 
  git clone <project-url>
  cd bjak-backend
  npm install
  node src

```
The API will be running on localhost:4000 or 127.0.0.1:4000

### Development server

`cd bjak-frontend` 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## API Reference

### Product

#### Create Product

```http
  POST /product
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. The name of the Product. |
| `price`      | `string` | **Required**. The price of the Product. |
| `image`      | `file` | The image of the product. |

#### Get all Products

```http
  GET /product
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | |  |


#### Get Product By ID

```http
  GET /product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|    |  |  |


#### Get item

```http
  DELETE /product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|      |  |  |

### Cart

#### Add item to cart
```http
  POST /cart
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| productId | String |**Required**. This is the product id. |
| quantity | Integer |**Required**. This is the quantity of the item. |

#### Get list of item in cart
```http
  GET /cart
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | |  |




#### Empty the cart

```http
  DELETE /cart/empty-cart
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|      |  |  |
