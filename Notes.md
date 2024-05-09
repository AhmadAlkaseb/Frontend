# Nyttige links
1) (**SVG-Ikoner**) 
https://www.iconfinder.com
2) (**Google-fonts**)
https://fonts.google.com
3) (**CSS**) https://tailwindcss.com/
4) (**React-router**) https://reactrouter.com/

## Noter
### React 
- React er et JavaScript-bibliotek til opbygning af brugergrænseflader, primært for webapplikationer. 
- Et React-komponent er et genanvendeligt produkt til opbygning af eksempelvis HTML-sider.

```json
import React from 'react'

function MyComponent() {
  return <div>Hello!</div>
}
```
- React Router er et populært bibliotek til styring af routing i React-applikationer. 
- En fil i et React-projekt hedder et modul.
- JSX står for JavaScript XML. Det er en udvidelse af JavaScript, der tillader os at skrive HTML-lignende kode direkte i JavaScript-filer. 
```json
import React from 'react';

function MyComponent() {
  return (
      <>
      <h1>Hello, world!</h1>
      <p>This is a JSX example.</p>
      </>
  )
}
```
- Props (properties) i React er en måde at sende data fra en "parent" komponent til en "child" komponent. 
```json
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <>
      <h1>Parent Component</h1>
      <ChildComponent name="John" age={30} />
    </>
  );
}

export default ParentComponent;
```
```json
import React from 'react';

const ChildComponent = (props) => {
  return (
    <>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </>
  );
}

export default ChildComponent;
```
## Commands
### Terminal
- Skift lokation: **cd lokation**
- Hvad er der på lokationen?: **ls**
- Gå tilbage: **cd ..**
### Docker
- Kør docker detached: **docker compose up -d**
- Kør docker: **docker compose up**
- Stop docker: **docker compose down**
- Docker status: **docker ps**
### SSH Fil
- Hop ind i den rigtige lokation: **cd ~/.ssh**
- Aflæs filen: **cat id_rsa.pub**
### Droplet
- Log på: **SSH root@ip**
- Log af: **exit**
- Genstart: **reboot**
### Firewall
- Brug DigitalOceans egen firewall.
### Docker hub
- Hent det seneste: **docker pull username/image:tag**
### React
- Installere instyle-compononets: **npm i styled-components**
- Installere react-router: **npm i install react-router-dom@version**
- Installere casual & json-server: **npm install --save-dev casual json-server**
- Kør projektet: **npm run dev**
- Luk projektet ned: **Ctrl c**
### Casual
- Gem mockup data i en fil: **node mockdata.js >> filnavn.json**
- Kør mock-serveren: **npm run mockserver**
- Luk mock-serveren ned: **Ctrl c**
## Guide til at sætte backend-projekt op på droplet