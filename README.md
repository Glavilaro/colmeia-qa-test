# Informe Final de QA – Colmeia (Cypress)

## Objetivo
Validar el comportamiento de la aplicación **Colmeia QA** mediante pruebas automatizadas con **Cypress**, cubriendo flujos principales, escenarios negativos y módulos sin funcionalidad activa.

---

## Login
**Archivo:** `login.cy.js`  
**Validaciones:**
- Acceso con credenciales correctas  
- Mensaje de error con credenciales incorrectas  
- Redirección al dashboard  

---

## Bancos de Dados
**Archivo:** `basesDeDados.cy.js`  
- Verifica carga de registros en la tabla  
- Navegación correcta al módulo  

**Archivo:** `BuscarBasesDeDados.cy.js`  
- Búsqueda con resultados  
- Filtrado correcto en la tabla  

**Archivo:** `BuscarBasesDeDadosResultados.cy.js`  
- Búsqueda sin resultados  
- Estado vacío documentado  

---

## Forms
**Archivo:** `Forms.cy.js`  
**Validaciones:**
- Apertura del módulo *Forms*  
- No hay registros ni formulario  
- El botón presente no dispara ninguna acción  

---

## Candidato
**Archivo:** `Candidato.cy.js`  
**Validaciones:**
- El botón *Candidato* está visible  
- Al hacer clic no redirige ni abre contenido  
- No hay tabla ni formulario asociado  

---

## Recuperar Contraseña
**Archivo:** `RecuperarSenha.cy.js`  
**Validaciones:**
- El enlace “Esqueceu sua senha?” está visible  
- Al hacer clic no redirige ni abre formulario de recuperación  
- El login permanece igual  

---

## Conclusiones
- La suite de QA cubre flujos principales (login, bancos de datos)  
- Incluye escenarios negativos (credenciales incorrectas, búsqueda sin resultados)  
- Documenta módulos sin funcionalidad activa (Forms, Candidato, recuperación de contraseña)  
- Los tests reflejan tanto el estado actual de la aplicación como las funcionalidades pendientes, aportando evidencia clara y reproducible  

---

# Colmeia QA – Suite de Tests Automatizados con Cypress

## Descripción
Proyecto de pruebas automatizadas con **Cypress** para validar la aplicación **Colmeia QA**.  
Incluye casos positivos, negativos y módulos sin funcionalidad activa.

---

## Instalación
### Requisitos
- Node.js 18+  
- npm o yarn  

### Pasos
```bash
git clone https://github.com/Glavilaro/colmeia-qa-test.git
cd colmeia-qa-test
npm install
