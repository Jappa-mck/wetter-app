# Wetter-App

Eine einfache Wetter-App, die zu einer eingegebenen Stadt die aktuelle Temperatur anzeigt. 
Das Projekt entsteht als Lernprojekt und wird laufend erweitert.

## Status

In Arbeit:

- [x] Stadt über die Geocoding-API finden
- [x] Aktuelle Temperatur abrufen und anzeigen
- [x] Integration weiterer Wetterdaten (Gefühlte Temperatur, Min/Max, Regenwahrscheinlichkeit)
- [x] Fehlermeldungen (z. B. Stadt nicht gefunden)
- [ ] Fuzzy Search 
- [ ] Styling mit CSS
- [x] Letzte Suche im localStorage speichern

Future Feature:

Geplant ist die Integration einer KI, die den Nutzer:innen passend zum aktuellen Wetter persönliche Outfit-Empfehlungen gibt.

## Verwendete Technik

- HTML, CSS, JavaScript (ohne Frameworks)
- [Open-Meteo](https://open-meteo.com/) Geocoding- und Wetter-API (kein API-Key nötig)

## App starten

1. Repository klonen oder als ZIP herunterladen
2. Die Datei `index.html` im Browser öffnen

## Projektstruktur

- `index.html` – Aufbau der Seite
- `style.css` – Gestaltung
- `script.js` – Logik und API-Anfragen

## Datenquelle

Wetterdaten von [Open-Meteo.com](https://open-meteo.com/).

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz, siehe Datei `LICENSE`.
