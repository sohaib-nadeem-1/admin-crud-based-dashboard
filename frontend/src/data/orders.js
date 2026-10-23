// Sample orders. Later this comes from the database through the API.
export const orderStatuses = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export const initialOrders = [
  {
    id: "ORD-1012",
    date: "2026-10-14",
    status: "Pending",
    customer: { name: "Noah Garcia", email: "noah.garcia@example.com", phone: "+1 555 010 1201", address: "48 Pine Street, Austin, TX 78701" },
    items: [
      { name: "Mechanical Keyboard", quantity: 1, price: 99.0 },
      { name: "Desk Mat", quantity: 1, price: 19.99 },
    ],
  },
  {
    id: "ORD-1011",
    date: "2026-10-13",
    status: "Processing",
    customer: { name: "Ava Patel", email: "ava.patel@example.com", phone: "+1 555 010 1188", address: "902 Lake View Road, Chicago, IL 60601" },
    items: [{ name: "Wireless Headphones", quantity: 1, price: 79.99 }],
  },
  {
    id: "ORD-1010",
    date: "2026-10-12",
    status: "Shipped",
    customer: { name: "Liam Thompson", email: "liam.thompson@example.com", phone: "+1 555 010 1175", address: "17 Maple Avenue, Denver, CO 80202" },
    items: [
      { name: "Gaming Mouse", quantity: 1, price: 49.99 },
      { name: "USB-C Cable", quantity: 3, price: 12.99 },
    ],
  },
  {
    id: "ORD-1009",
    date: "2026-10-10",
    status: "Delivered",
    customer: { name: "Olivia Martinez", email: "olivia.martinez@example.com", phone: "+1 555 010 1160", address: "230 Ocean Drive, Miami, FL 33139" },
    items: [{ name: "Laptop Stand", quantity: 2, price: 34.5 }],
  },
  {
    id: "ORD-1008",
    date: "2026-10-09",
    status: "Delivered",
    customer: { name: "Emily Davis", email: "emily.davis@example.com", phone: "+1 555 010 1142", address: "5 Cedar Court, Seattle, WA 98101" },
    items: [
      { name: "Monitor Light Bar", quantity: 1, price: 39.99 },
      { name: "Webcam 1080p", quantity: 1, price: 54.99 },
    ],
  },
  {
    id: "ORD-1007",
    date: "2026-10-07",
    status: "Cancelled",
    customer: { name: "James Wilson", email: "james.wilson@example.com", phone: "+1 555 010 1129", address: "76 River Road, Portland, OR 97201" },
    items: [{ name: "Bluetooth Speaker", quantity: 1, price: 59.0 }],
  },
  {
    id: "ORD-1006",
    date: "2026-10-05",
    status: "Shipped",
    customer: { name: "Michael Chen", email: "michael.chen@example.com", phone: "+1 555 010 1103", address: "310 Harbor Street, San Diego, CA 92101" },
    items: [{ name: "Wireless Charger", quantity: 2, price: 24.99 }],
  },
  {
    id: "ORD-1005",
    date: "2026-10-03",
    status: "Delivered",
    customer: { name: "Sophia Anderson", email: "sophia.anderson@example.com", phone: "+1 555 010 1091", address: "14 Elm Lane, Boston, MA 02108" },
    items: [
      { name: "Wireless Headphones", quantity: 1, price: 79.99 },
      { name: "USB-C Cable", quantity: 1, price: 12.99 },
    ],
  },
  {
    id: "ORD-1004",
    date: "2026-10-01",
    status: "Processing",
    customer: { name: "Daniel Brown", email: "daniel.brown@example.com", phone: "+1 555 010 1077", address: "88 Oak Boulevard, Dallas, TX 75201" },
    items: [{ name: "Mechanical Keyboard", quantity: 1, price: 99.0 }],
  },
  {
    id: "ORD-1003",
    date: "2026-09-28",
    status: "Delivered",
    customer: { name: "Sarah Johnson", email: "sarah.johnson@example.com", phone: "+1 555 010 1064", address: "3 Willow Way, New York, NY 10001" },
    items: [
      { name: "Desk Mat", quantity: 2, price: 19.99 },
      { name: "Laptop Stand", quantity: 1, price: 34.5 },
    ],
  },
];
