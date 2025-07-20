# PenPantry
En esta aplicación, el usuario puede agregar y eliminar lapiceras (productos) al carrito desde un listado.
## Trabajo Práctico Final — Seminario Angular 2025
### Datos del Estudiante;
- Nombre y Apellido: Malena Manzalini Abitante
- DNI: 45578367
- Email: manzamale@gmail.com
- Sede: Tandil
##
En esta versión de Angular ya no se agrega la notación "component" al generar un componente, de ser necesario se puede editar el archivo `angular.json`. Me di cuenta de esto ya después de haber arrancado el proyecto, así que sólo le agregue el sufijo a los servicios

```
  "projects": {
    "app": {
      ...
      "schematics": {
        "@schematics/angular:component": { "type": "component" },
        "@schematics/angular:directive": { "type": "directive" },
        "@schematics/angular:service": { "type": "service" },
        "@schematics/angular:guard": { "typeSeparator": "." },
        "@schematics/angular:interceptor": { "typeSeparator": "." },
        "@schematics/angular:module": { "typeSeparator": "." },
        "@schematics/angular:pipe": { "typeSeparator": "." },
        "@schematics/angular:resolver": { "typeSeparator": "." }
      },
  ...
```
