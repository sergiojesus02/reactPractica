# Como trabajar con git

![error al mostar imagen](https://nodd3r.com/media/blog/Portadas_blog_21.png)

que es es git? 

el sistema de control de versiones moderno más utilizado del mundo. Git es un proyecto de código abierto maduro y con un mantenimiento activo de desarrolló 

## Como trabajar en equipo con git?

- primero se clona el repositorio del proyecto 
para clonarlo se usa el siguente comando

~~~
git clone https://url del repositorio
~~~

- despues de clonar el repositorio hay que instalar las dependencias del proyecto usar el siguiento comando

~~~
npm install
~~~

- por lo general hay dos ramas en el repositorio la rama
main o master y la QA

la arama main o master no se debe de tocar siempre trabajar en la rama QA, de la rama QA es donde se  heredaran o crearan nuestras futuras ramas, ahí es donde trabajaremos

- al clonar el repositorio en la terminal mostrara la rama main o master, hay que cambiarse a la rama QA con el siguiente comando

~~~
git checkout QA
~~~

- para empesar a trabajar primero hay que actualizar la rama QA para actualizar una rama usamos el siguente comando

~~~
git pull --rebase origin QA
~~~

una vez actualizado nuestra rama creamos una para trabajar en ella

~~~
git checkout -b Feature/en lo que trabajaremos
~~~

ejemplo: 
~~~
git checkout -b Feature/vistaLogin
~~~


- una vez terminemos de trabajar es hora de subir nuestro trabajo al remositorio remoto

acontinuacion se muestran todos los comandos necesarios para poder hacer push al repositorio

usamos el siguente comando

~~~
git add .
~~~

git add . para añadir todos nuestros cambios para que podamos enviarlos al repositorio

~~~
git commit -m "mensaje del commit"
~~~

despues de añadir todos nuestros archivos se hace un commit para poder subir nuestros cambios, dentro del commit se escribe un pequeño mensaje de lo que se hizo en la rama para que nuestro equipo sepa que es lo que hicimos.

~~~
git pull --rebase origin QA
~~~

se vuelve a hacer un pull para asegurarase de que nuestros cambios esten actualizados y no tenga ningun problema al subirse

~~~
git push origin Feature/en lo que trabajamos
~~~

finalmente se hace un git push para enviar nuestros cambios al rempositorio remoto

son son todos los comandos necesarios para trabajar con git en nuestro repo local y mandarlo hacia el repo remoto

## Quieres aprender mas sobre git?

- puedes checar el siguiente enlace para conocer mas

[MAS SOBRE GIT](https://www.youtube.com/watch?v=3GymExBkKjE)

![eror al mostrar la imagen](https://camo.githubusercontent.com/a433273b618d7b8c2569ba6013774adf910ae8e3da45eaff176f64781bfd53fc/68747470733a2f2f72617069646170692e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031372f30312f6f63746f6361742e676966)