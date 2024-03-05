{
  "name": "Automatischer Ablauf",
  "schedule": {
    "cron": "0 */70 * * * *"
  },
  "actions": [
    {
      "name": "Start",
      "type": "start",
      "config": {
        "url": "https://de224.die-staemme.de/game.php?village=2375&screen=overview",
        "execute": true
      }
    },
    {
      "name": "Klicken auf Versammlungsplatz",
      "type": "click",
      "config": {
        "selector": "span > a.quickbar_link",
        "delay": 10000
      }
    },
    {
      "name": "Klicken auf Raubzug",
      "type": "click",
      "config": {
        "selector": "td > a",
        "delay": 10000
      }
    },
    {
      "name": "Raubzug senden",
      "type": "click",
      "config": {
        "selector": "td > button.btn",
        "delay": 5000
      }
    },
    {
      "name": "Start",
      "type": "click",
      "config": {
        "selector": "div.action-container > a.free_send_button",
        "delay": 1023
      }
    },
    {
      "name": "Start",
      "type": "click",
      "config": {
        "selector": "div.action-container > a.free_send_button",
        "delay": 1011
      }
    },
    {
      "name": "Start",
      "type": "click",
      "config": {
        "selector": "div.action-container > a.free_send_button",
        "delay": 2054
      }
    },
    {
      "name": "Back",
      "type": "click",
      "config": {
        "selector": "td#menu_row2_village > a.tooltip-delayed",
        "delay": 1091
      }
    }
  ]
}
