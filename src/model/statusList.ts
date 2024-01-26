import type { Status } from "@/types/form-data.types";

export const statusList: Status[] = [
  {
    name: "In Progress",
    icon: "src/assets/icons/Time_atack_duotone.svg",
    iconBgColor: "#E9A23B",
    bgColor: "#F5D565",
  },
  {
    name: "Completed",
    icon: "src/assets/icons/Done_round_duotone.svg",
    iconBgColor: "#32D657",
    bgColor: "#A0ECB1",
  },
  {
    name: "Blocked",
    icon: "src/assets/icons/close_ring_duotone.svg",
    iconBgColor: "#DD524C",
    bgColor: "#F7D4D3",
  },
  {
    name: "To do",
    icon: "src/assets/icons/circle.svg",
    iconBgColor: "#97A3B6",
    bgColor: "#E3E8EF",
  },
];
