# use-nigeria-location-state-coordinate

[](https://www.npmjs.com/package/use-nigeria-location-state-coordinate)
[](https://opensource.org/licenses/MIT)

An enhanced, high-performance utility for Nigerian geographic data. This is an extended fork of the original project by [Muiz Haruna](https://github.com/devdesiignn/), updated to include **State Geo-Coordinates (Latitude & Longitude)** and optimized for modern TypeScript workflows.

## ✨ What's New in v1.1.6?

- 📍 **Geo-Coordinates:** Built-in Latitude and Longitude for all 36 states + FCT.
- 🔍 **Smart Search:** All hooks now support lookups by **State Name** (e.g., "Lagos") or **UUID**.
- 🚀 **Upgraded Lite Hooks:** `useAllStates()` and `useSingleState()` now include coordinates by default.
- 💎 **Type Safety:** Full TypeScript support with updated `TState`, `TStateInfo`, and `TLGA` interfaces.

## 📦 Install

```sh
npm install use-nigeria-location-state-coordinate
```

## 🛠 Usage

### Fetch State Coordinates (Direct)

You can now pass a **UUID** or a **State Name**. It's case-insensitive\!

```js
import { useStateCoordinates } from "use-nigeria-location-state-coordinate";

// Fetch by Name
const coordsByName = useStateCoordinates("Lagos");
// => { latitude: 6.5244, longitude: 3.3792 }

// Fetch by UUID
const coordsByID = useStateCoordinates("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed");
// => { latitude: 5.4527, longitude: 7.5248 }
```

### Fetch Single State (Lite + Geo) ⚡

Perfect for quick lookups in your components.

```js
import { useSingleState } from "use-nigeria-location-state-coordinate";

const state = useSingleState("Oyo");
/* => 
{ 
  name: "Oyo", 
  id: "4b...", 
  latitude: 7.3775, 
  longitude: 3.9470 
}
*/
```

### Fetch All States with Coordinates

Use this for dropdowns or list views that require mapping data.

```js
import { useAllStatesCoordinates } from "use-nigeria-location-state-coordinate";

const states = useAllStatesCoordinates();
/* => 
[ 
  { name: "Abia", id: "2e...", latitude: 5.4527, longitude: 7.5248 }, 
  ... 
]
*/
```

---

## 🔍 Advanced API Reference

All functions below now accept either a **State Name** or a **State ID**.

| Function                    | Parameter    | Description                                      |
| :-------------------------- | :----------- | :----------------------------------------------- |
| `useStateInfo(id/name)`     | `identifier` | Returns full data object for a single state.     |
| `useSingleState(id/name)`   | `identifier` | Returns Name, ID, Lat, and Lng for a state.      |
| `useStateLGAs(id/name)`     | `identifier` | Returns list of all LGAs in the state.           |
| `useSingleLGA(s, l)`        | `state, lga` | Returns a specific LGA (Lookup by Name or ID).   |
| `useStateUnis(id/name)`     | `identifier` | Returns all Universities in the state.           |
| `useStateAirports(id/name)` | `identifier` | Returns all Airports in the state.               |
| `useStateCapital(id/name)`  | `identifier` | Returns the state capital name.                  |
| `useStateGeoPoli(id/name)`  | `identifier` | Returns the Geopolitical Zone (e.g. South West). |

---

## 👥 Authors

### [Remilekun Olowookere](https://github.com/oludaremy/)

_Fork Maintainer & Contributor_

### [Muiz Haruna](https://github.com/devdesiignn/)

_Original Author_

## 📜 License

This project is licensed under the MIT License. If you find this package useful, please consider starring both the [original repository](https://github.com/devdesiignn/use-nigeria-location) and this [fork](https://www.google.com/search?q=https://github.com/oludaremy/use-nigeria-location-state-coordinate)\!

🌐 **Live Demo:** [View Interactive Map](https://www.google.com/search?q=https://oludaremy.github.io/use-nigeria-location-state-coordinate/)
