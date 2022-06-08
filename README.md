E-commerce de componentes de Pc realizado para el curso de ReactJs de CoderHouse


******************************************************
Las dependencias utilizadas para este proyecto fueron:

*https://v5.reactrouter.com/web/guides/quick-start
*https://mui.com/
*https://firebase.google.com/

*Con ReactRouterDom cree las diferentes rutas para cada seccion del sitio.
*Se utilizó MUI para algunos detalles visuales como el Loader y el contador de productos para agregar.
*Firebase almacena la base de datos con todos los productos y su detalle.
******************************************************


*********************
Librerias utilizadas:

https://getbootstrap.com

*Bootstrap me ayudo a crear la navbar y a facilitar el responsive
*********************

El sitio cuenta con 5 diferentes vistas:

HOME
*Aqui se visualizara un banner full-screen. Desde aqui se puede acceder a la seccion de PRODUCTOS a traves de los 3 botones; CPU, GPU Y MOBO.*

![home](https://user-images.githubusercontent.com/95661597/172535900-1363103c-627d-4ea4-bac8-54e87b762f5d.png)

PRODUCTOS:
*Aqui se visualizaran las cards de los diferentes productos segun la categoria seleccionada. Al clickear una de estas podremos acceder a la seccion de DETALLE del producto seleccionado.*
![productos](https://user-images.githubusercontent.com/95661597/172536379-b4d7db7e-3aa4-46ae-bb3d-e78d41d6726f.png)

DETALLE:
*Aqui se visualizara una card la cual contendra el detalle del producto seleccionado. Esta card cuenta con un contador y un boton para agregar la cantidad seleccionada al CARRITO.*
![detalle](https://user-images.githubusercontent.com/95661597/172537162-24003767-13bf-4bba-b6af-b35a6c7cd876.png)

CARRITO:
*Se puede acceder a el mediante su icono en la esquina superior derecha o con el boton |Ir al carrito| que se muestra en el DETALLE luego de agregar al carrito el producto. Aqui se muestra una tabla con los productos agregados al carrito, su cantidad, valor por producto y el valor total. Desde aqui se puede vaciar el carrito o procesar la compra y dirigirse a la ultima seccion: CHECKOUT.*
![carrito](https://user-images.githubusercontent.com/95661597/172537583-8123d2d8-5a7f-4563-93cf-44ffc8aba3f0.png)

CHECKOUT:
*En esta seccion se finaliza la compra rellenando un formulario con los datos del comprador. El pedido es cargado en Firebase y se genera un ID de compra.*
![procesarcompra](https://user-images.githubusercontent.com/95661597/172537849-117f07ee-0816-4b43-8c01-ed8f3fb65151.png)

DEMOSTRACION DE USO:

https://user-images.githubusercontent.com/95661597/172541299-d4cb7bca-540c-48a4-b531-be4def6ee22f.mp4






