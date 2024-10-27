export interface Project {
  id: number;
  img: string;
  name: string;
  stack: string[];
  description: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  descriptionShort: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  urlDemo: string;
  urlCode: string;
  mockup: {
    desktop: {
      img: string;
      alt: { [index: string]: string; en: string; es: string; de: string };
      description: {
        [index: string]: string;
        en: string;
        es: string;
        de: string;
      };
    };
    tablet: {
      img: string;
      alt: { [index: string]: string; en: string; es: string; de: string };
      description: {
        [index: string]: string;
        en: string;
        es: string;
        de: string;
      };
    };
    mobile: {
      img: string;
      alt: { [index: string]: string; en: string; es: string; de: string };
      description: {
        [index: string]: string;
        en: string;
        es: string;
        de: string;
      };
    };
  };
  screenshots: string[];
  challenges?: string[];
  video?: string;
  colSpan: string;
  rowSpan: string;
  backgroundColor: string;
  coverImg: string;
  topBg: string;
  bottomBg: string;
  keyFeatures: { [index: string]: string[] };
}

//icons for the flex list of projects
const zombie = require('./screenshots/zombiemarkt/mockUp.png');
const inventory = require('./screenshots/inventoryManager/mockUp.png');
const rich = require('./screenshots/richSimulator/mockUp.png');
const mockupDelivery = require('./screenshots/deliveryFee/mockUp.png');

//cover imgs for GRID show-off
const zombiePhone = require('./screenshots/zombiemarkt/phone.png');

//projects screenshots
//zombieMarkt
const zombie1 = require('./screenshots/zombiemarkt/zombie1.png');
const zombie2 = require('./screenshots/zombiemarkt/zombie2.png');
const zombie3 = require('./screenshots/zombiemarkt/zombie3.png');
const zombie4 =
  'https://raw.githubusercontent.com/santiagomanso/ZombieMarkt/main/q-commerce/e-commerce_reusable-components.drawio.png';
const zombie5 =
  'https://raw.githubusercontent.com/santiagomanso/ZombieMarkt/main/server/createOrder%20flowchart.jpg';
const zombie6 =
  'https://raw.githubusercontent.com/santiagomanso/ZombieMarkt/main/FlowChart-Google-Oauth-20.drawio.png';
const zombieDesktop = require('./screenshots/zombiemarkt/desktop.webp');
const zombieTablet = require('./screenshots/zombiemarkt/tablet.webp');
const zombieMobile = require('./screenshots/zombiemarkt/mobile.webp');

//inventory manager
const challengeInv1 =
  'https://raw.githubusercontent.com/santiagomanso/ZombieMarkt/main/inventory-manager/src/assets/debouncedFlowchart.png';
const inventoryDesktop = require('./screenshots/inventoryManager/desktop.webp');
const inventoryTablet = require('./screenshots/inventoryManager/tablet.webp');
const inventoryMobile = require('./screenshots/inventoryManager/mobile.webp');

//deliveryFee
const deliveryDesktop = require('./screenshots/deliveryFee/desktop.webp');
const deliveryTablet = require('./screenshots/deliveryFee/tablet.webp');
const deliveryMobile = require('./screenshots/deliveryFee/mobile.webp');

//rich simulator
const richWeb = require('./screenshots/richSimulator/web.webp');
const richTablet = require('./screenshots/richSimulator/tablet.webp');
const richMobile = require('./screenshots/richSimulator/mobile.webp');

//array of projects to feed ProjectList and modal components
export const projectsArray: Project[] = [
  {
    id: 1,
    img: rich,
    name: 'Rich Simulator',
    topBg: 'bg-black/40 dark:bg-black/70',
    bottomBg: 'bg-black/40 dark:bg-black/70',
    mockup: {
      desktop: {
        img: richWeb,
        alt: {
          es: 'Rich Simulator',
          de: 'Rich Simulator',
          en: 'Rich Simulator',
        },
        description: { es: '', de: '', en: '' },
      },
      tablet: {
        img: richTablet,
        alt: {
          es: 'Rich Simulator',
          de: 'Rich Simulator',
          en: 'Rich Simulator',
        },
        description: {
          es: 'Menu desplegable, dos columnas y menu flotante en la parte inferior',
          en: 'Dropdown menu, two columns and floating menu at the bottom',
          de: 'Dropdown-Menü, zwei Spalten und schwebendes Menü unten',
        },
      },
      mobile: {
        img: richMobile,
        alt: {
          es: 'Rich Simulator',
          de: 'Rich Simulator',
          en: 'Rich Simulator',
        },
        description: {
          es: 'Única columna, menu desplegable y menu flotante en la parte inferior',
          de: 'Einzelspalte, Dropdown-Menü und schwebendes Menü unten',
          en: 'Single column, dropdown menu and floating menu at the bottom',
        },
      },
    },
    stack: [
      'multi language',
      'html',
      'css',
      'javascript',
      'react',
      'guest account',
    ],
    keyFeatures: {
      es: [
        'cuenta invitado',
        'multi idioma',
        'simulador de riqueza',
        'simulador de compras',
        'API top 10 billonarios',
        'E-Commerce',
        'Tema oscuro y claro',
        'Autenticación',
      ],
      en: [
        'guest account',
        'multi language',
        'wealth simulator',
        'shopping simulator',
        'top 10 billionaires API',
        'E-Commerce',
        'Dark and light theme',
        'Authentication',
      ],
      de: [
        'Gastkonto',
        'mehrsprachig',
        'Reichtumssimulator',
        'Einkaufssimulator',
        'Top 10 Milliardäre API',
        'E-Commerce',
        'Dunkles und helles Thema',
        'Authentifizierung',
      ],
    },
    description: {
      en: "Ever wonder what it would be like to be filthy rich? Well with this application you can pretend you are one of the top 10 richest people on the planet and use that person's money to buy the most expensive assets in the world; buckingham palace? we got it, aircraft carriers? we got it, international space station? we got it. As an extra point, but not a minor one, you will be able to see how many years an average worker in different countries of the world would need to earn a minimum wage; and finally you will be able to see how many people with an average salary combined are needed to match the billionaire you have selected.",
      es: '¿Alguna vez te has preguntado cómo sería ser asquerosamente rico? Pues con esta aplicación podrás fingir que eres una de las 10 personas más ricas del planeta y utilizar el dinero de esa persona para comprar los bienes más caros del mundo; ¿el palacio de buckingham? lo tenemos, ¿portaaviones? lo tenemos, ¿estación espacial internacional? lo tenemos. Como punto extra, pero no menor, podrás ver cuántos años necesitaría un trabajador medio en diferentes países del mundo para ganar un salario mínimo; y por último podrás ver cuántas personas con un salario medio combinado se necesitan para igualar al multimillonario que has seleccionado.',
      de: 'Haben Sie sich jemals gefragt, wie es wäre, stinkreich zu sein? Mit dieser Anwendung können Sie so tun, als wären Sie einer der 10 reichsten Menschen auf dem Planeten, und mit dem Geld dieser Person die teuersten Güter der Welt kaufen: den Buckingham Palast? Als zusätzlichen, aber nicht unbedeutenden Punkt können Sie sehen, wie viele Jahre ein durchschnittlicher Arbeiter in verschiedenen Ländern der Welt braucht, um einen Mindestlohn zu verdienen; und schließlich können Sie sehen, wie viele Menschen mit einem durchschnittlichen Gehalt zusammen benötigt werden, um mit dem Milliardär, den Sie ausgewählt haben, gleichzuziehen.',
    },
    descriptionShort: {
      en: "Simulate being one of the world's richest people and use their wealth to buy expensive assets while comparing wages globally.",
      es: 'Simula ser una de las personas más ricas del mundo y utiliza su riqueza para comprar bienes caros mientras comparas salarios globalmente.',
      de: 'Simulieren Sie, einer der reichsten Menschen der Welt zu sein, und verwenden Sie deren Vermögen, um teure Güter zu kaufen, während Sie Löhne weltweit vergleichen.',
    },
    urlDemo: 'https://rich-simulator.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/rich-commerce',
    screenshots: [
      '/screenshots/richSimulator/1.png',
      '/screenshots/richSimulator/2.png',
      '/screenshots/richSimulator/3.png',
      '/screenshots/richSimulator/4.png',
    ],
    challenges: ['/screenshots/richSimulator/challenge1.png'],
    video: 'WN44D_yQlXI',

    colSpan: 'col-span-1 md:col-span-7',
    rowSpan: 'row-span-',
    backgroundColor: '',
    coverImg: '',
  },
  {
    id: 4,
    img: mockupDelivery,
    mockup: {
      desktop: {
        img: deliveryDesktop,
        alt: {
          es: 'Delivery Fee Calculator',
          en: 'Delivery Fee Calculator',
          de: 'Delivery Fee Calculator',
        },
        description: { es: '', en: '', de: '' },
      },
      tablet: {
        img: deliveryTablet,
        alt: {
          es: 'Delivery Fee Calculator',
          en: 'Delivery Fee Calculator',
          de: 'Delivery Fee Calculator',
        },
        description: { es: '', en: '', de: '' },
      },
      mobile: {
        img: deliveryMobile,
        alt: {
          es: 'Delivery Fee Calculator',
          en: 'Delivery Fee Calculator',
          de: 'Delivery Fee Calculator',
        },
        description: { es: '', en: '', de: '' },
      },
    },
    name: 'Delivery Fee calculator',
    topBg: 'bg-black/40 dark:bg-black/70',
    bottomBg: 'bg-black/40 dark:bg-black/70',
    stack: [
      'multi language',
      'typescript',
      'javascript',
      'HTML',
      'CSS',
      'tailwind css',
      'react',
      'css',
    ],
    keyFeatures: {
      es: [''],
      en: [''],
      de: [''],
    },
    description: {
      en: 'Do you want to know how big companies charge for delivery service? This application recreates a scenario where the shipping cost depends on multiple factors such as: the price of the shopping cart, the quantity of products and the distance traveled; as an extra point I added a playground section where one can randomly select values to see more quickly different scenarios where the factors previously described influence altering the shipping cost.',
      es: '¿Quieres saber cómo cobran las grandes empresas por el servicio de envío? Esta aplicación recrea un escenario donde el coste de envío depende de múltiples factores como: el precio del carrito de la compra, la cantidad de productos y la distancia recorrida; como punto extra he añadido una sección de juego donde se pueden seleccionar valores aleatoriamente para ver más rápidamente diferentes escenarios donde los factores anteriormente descritos influyen alterando el coste de envío.',
      de: 'Willst du wissen, wie große Unternehmen für den Lieferservice bezahlen? Diese Anwendung stellt ein Szenario nach, in dem die Versandkosten von mehreren Faktoren abhängen, wie z. B. dem Preis des Warenkorbs, der Menge der Produkte und der zurückgelegten Entfernung. Als zusätzlichen Punkt habe ich einen Spielplatzabschnitt hinzugefügt, in dem man zufällig Werte auswählen kann, um schneller verschiedene Szenarien zu sehen, in denen die zuvor beschriebenen Faktoren die Veränderung der Versandkosten beeinflussen.',
    },
    descriptionShort: {
      en: 'Calculate delivery fees based on multiple factors like cart price, product quantity, and distance with a playground for quick scenarios.',
      es: 'Calcula las tarifas de envío basadas en múltiples factores como el precio del carrito, la cantidad de productos y la distancia, con una sección para escenarios rápidos.',
      de: 'Berechnen Sie Liefergebühren basierend auf mehreren Faktoren wie Warenkorbpreis, Produktmenge und Entfernung, mit einem Bereich für schnelle Szenarien.',
    },
    urlDemo: 'https://deliveryfee.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/delivery-fee-calculator',
    screenshots: [
      '/screenshots/deliveryFee/1.png',
      '/screenshots/deliveryFee/2.png',
      '/screenshots/deliveryFee/3.png',
    ],
    // challenges: [],

    colSpan: 'col-span-1 md:col-span-4',
    rowSpan: 'row-span-2',
    backgroundColor: '',
    coverImg: '',
  },
  {
    id: 2,
    img: inventory,
    mockup: {
      desktop: {
        img: inventoryDesktop,
        alt: {
          es: 'Inventory Manager',
          en: 'Inventory Manager',
          de: 'Inventory Manager',
        },
        description: { es: '', en: '', de: '' },
      },
      tablet: {
        img: inventoryTablet,
        alt: {
          es: 'Inventory Manager',
          en: 'Inventory Manager',
          de: 'Inventory Manager',
        },
        description: { es: '', en: '', de: '' },
      },
      mobile: {
        img: inventoryMobile,
        alt: {
          es: 'Inventory Manager',
          en: 'Inventory Manager',
          de: 'Inventory Manager',
        },
        description: { es: '', en: '', de: '' },
      },
    },
    name: 'Inventory Manager',
    topBg: 'bg-black/40 dark:bg-black/70',
    bottomBg: 'bg-black/40 dark:bg-black/70',
    stack: [
      'tailwind css',
      'fullstack',
      'html',
      'react',
      'mongo db',
      'express',
      'node js',
    ],
    keyFeatures: {
      es: [''],
      en: [''],
      de: [''],
    },
    description: {
      en: 'This is the application that a worker from the warehouse of the zombieMarkt e-commerce would use. The emplployee could inbound product (create / increase stock), outbound procuts (delete / descrease stock) as well as edit any product. I also included suport for the interviewer to see all users, all orders and all products. ',
      es: 'Esta es la aplicación que utilizaría un trabajador del almacén del comercio electrónico zombieMarkt. El empleado podría realizar altas de producto (crear / aumentar stock), bajas de producto (eliminar / reducir stock) así como editar cualquier producto. También incluí soporte para que el entrevistador pudiera ver todos los usuarios, todos los pedidos y todos los productos.',
      de: 'Dies ist die Anwendung, die ein Mitarbeiter aus dem Lager des zombieMarkt e-Commerce verwenden würde. Der Mitarbeiter kann Produkte einliefern (anlegen/erhöhen), Bestellungen ausliefern (löschen/verringern) und jedes Produkt bearbeiten. Ich habe auch die Möglichkeit vorgesehen, dass der Interviewer alle Benutzer, alle Bestellungen und alle Produkte sehen kann.',
    },
    descriptionShort: {
      en: 'Manage inventory by adding, removing, or editing stock, while tracking all users, orders, and products in this warehouse app.',
      es: 'Gestiona el inventario agregando, eliminando o editando stock, mientras realizas un seguimiento de todos los usuarios, pedidos y productos en esta app de almacén.',
      de: 'Verwalten Sie Bestände, indem Sie Lager hinzufügen, entfernen oder bearbeiten, und verfolgen Sie alle Benutzer, Bestellungen und Produkte in dieser Lager-App.',
    },
    urlDemo: 'https://zombie-markt-gswm.vercel.app/',
    urlCode: 'https://github.com/santiagomanso/ZombieMarkt',
    screenshots: [
      '/screenshots/inventoryManager/1.png',
      '/screenshots/inventoryManager/2.png',
      '/screenshots/inventoryManager/3.png',
    ],
    challenges: [challengeInv1],

    colSpan: 'col-span-1 md:col-span-4',
    rowSpan: 'row-span-2',
    backgroundColor: '',
    coverImg: '',
  },
  {
    id: 3,
    img: zombie,
    mockup: {
      desktop: {
        img: zombieDesktop,
        alt: { es: '', en: '', de: '' },
        description: { es: '', en: '', de: '' },
      },
      tablet: {
        img: zombieTablet,
        alt: { es: '', en: '', de: '' },
        description: { es: '', en: '', de: '' },
      },
      mobile: {
        img: zombieMobile,
        alt: { es: '', en: '', de: '' },
        description: { es: '', en: '', de: '' },
      },
    },
    name: 'Zombiemarkt',
    topBg: 'bg-black/40 dark:bg-black/70',
    bottomBg: 'bg-black/40 dark:bg-black/70',
    stack: [
      'fullstack',
      'authentication',
      'html',
      'css',
      'javascript',
      'react',
      'Tailwind Css',
    ],
    keyFeatures: {
      es: [''],
      en: [''],
      de: [''],
    },
    description: {
      en: 'Humanity is on the verge of extinction, this is the last remaining online shopping platform, a supermarket store. Our drivers can overcome the wave of zombies and bring your products to your home safe and sound.This is one of three applications that makes e-commerce work, the purpose of this app is to register users, create orders and update the stock of products once the order is placed.',
      es: 'La humanidad está al borde de la extinción, esta es la última plataforma de compras online que queda, un supermercado online. Nuestros conductores pueden superar la oleada de zombis y llevar tus productos a casa sanos y salvos. Esta es una de las tres aplicaciones que hacen funcionar el comercio electrónico, la finalidad de esta app es registrar usuarios, crear pedidos y actualizar el stock de productos una vez realizado el pedido.',
      de: 'Die Menschheit ist am Rande des Aussterbens, dies ist die letzte verbleibende Online-Shopping-Plattform, ein Supermarkt. Dies ist eine der drei Anwendungen, die den elektronischen Handel funktionieren lassen. Der Zweck dieser App ist es, Benutzer zu registrieren, Bestellungen zu erstellen und den Bestand an Produkten zu aktualisieren, sobald die Bestellung aufgegeben wurde.',
    },
    descriptionShort: {
      en: 'Survive a zombie apocalypse by placing orders and receiving products safely in the last remaining online supermarket.',
      es: 'Sobrevive a un apocalipsis zombi realizando pedidos y recibiendo productos de forma segura en el último supermercado en línea.',
      de: 'Überleben Sie eine Zombie-Apokalypse, indem Sie Bestellungen aufgeben und Produkte sicher im letzten verbleibenden Online-Supermarkt erhalten.',
    },
    video: 'FBpk9-WpLDE',
    urlDemo: 'https://zombie-markt-fj2k.vercel.app/',
    urlCode: 'https://github.com/santiagomanso/ZombieMarkt',
    screenshots: [
      '/screenshots/zombiemarkt/1.png',
      '/screenshots/zombiemarkt/2.png',
      '/screenshots/zombiemarkt/3.png',
    ],
    challenges: [zombie4, zombie5, zombie6],
    colSpan: 'col-span-1 md:col-span-7',
    rowSpan: 'row-span-1',
    backgroundColor: '',
    coverImg: '',
  },
];
