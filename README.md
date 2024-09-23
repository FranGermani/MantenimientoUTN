Instrucciones para Subir Cambios a la Rama dev

1)Clona el Repositorio: Si aún no lo han hecho, clonen el repositorio en su máquina local con el siguiente comando:

bash:
Copiar código
git clone https://github.com/FranGermani/MantenimientoUTN.git

2)Navega a la Carpeta del Proyecto: Accede a la carpeta del proyecto clonado:

bash:
Copiar código
cd MantenimientoUTN

3)Crea o Cambia a la Rama dev: Si la rama dev ya existe, pueden cambiar a ella con:

bash:
Copiar código
git checkout dev

4)Si no existe, créenla y cambien a ella:

bash:
Copiar código
git checkout -b dev

5)Realiza Cambios: Hagan los cambios necesarios en el código.

6)Agrega los Cambios: Después de realizar los cambios, asegúrense de agregar los archivos modificados:

bash:
Copiar código
git add .

7)Confirma los Cambios: Realicen un commit con una descripción clara de lo que han hecho:

bash:
Copiar código
git commit -m "Descripción de los cambios"

8)Sube la Rama dev al Repositorio Remoto: Para subir los cambios a la rama dev en el repositorio de GitHub, utilicen:

bash:
Copiar código
git push origin dev

8)Verifica los Cambios en GitHub: Después de subir, pueden ir al enlace del repositorio en su navegador para verificar que los cambios se hayan subido correctamente.

Notas Adicionales
Asegúrense de estar siempre en la rama correcta antes de hacer cambios.
Si están trabajando en equipo, es recomendable hacer un git pull antes de subir sus cambios para asegurarse de que su rama dev esté actualizada con respecto al repositorio remoto.

made with love
francisco dimmer, francisco germani,ramiro borello, tute bustamante
