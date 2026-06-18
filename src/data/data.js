import {
  DollarSign,
  Package,
  UserPlus,
  Percent,
  LayoutDashboard,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";

export const stats = [
  {
    label: "Revenue",
    value: "₦2.4M",
    change: 12.5,
    icon: DollarSign,
    accent: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Orders",
    value: "1,280",
    change: 8.2,
    icon: Package,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "New Customers",
    value: "342",
    change: -3.1,
    icon: UserPlus,
    accent: "bg-amber-50 text-amber-600",
  },
  {
    label: "Conversion",
    value: "3.6%",
    change: 1.8,
    icon: Percent,
    accent: "bg-rose-50 text-rose-600",
  },
];

export const chartData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 70 },
  { month: "May", value: 62 },
  { month: "Jun", value: 88 },
];

export const orders = [
  { id: "#1042", customer: "Amaka Obi", amount: "₦48,000", status: "Paid" },
  {
    id: "#1041",
    customer: "Tunde Bello",
    amount: "₦12,500",
    status: "Pending",
  },
  { id: "#1040", customer: "Grace Eze", amount: "₦93,200", status: "Paid" },
  { id: "#1039", customer: "Femi Akin", amount: "₦7,800", status: "Failed" },
  { id: "#1038", customer: "Zainab Musa", amount: "₦25,400", status: "Paid" },
  {
    id: "#1037",
    customer: "Chidi Nwosu",
    amount: "₦61,000",
    status: "Pending",
  },
];

export const navItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Orders", icon: ShoppingCart },
  { name: "Customers", icon: Users },
  { name: "Settings", icon: Settings },
];
