import { Campaign } from "ddtools-types";
import { IconType } from "react-icons";
import { FaUsers, FaVolumeUp } from "react-icons/fa";
import {
  GiScrollQuill,
  GiScrollUnfurled,
  GiPerson,
  GiSettingsKnobs,
} from "react-icons/gi";
import { AudioManager } from "./AudioManager";
import { EventLog } from "./EventLog";
import Party from "./Party";

export type Widget = {
  label: string;
  ariaLabel: string;
  icon: IconType;
  component: JSX.Element;
  shownToUserRoles: ("dm" | "player")[];
  shownDuringCampaignMode: Campaign["mode"][];
};

export const notesWidget: Widget = {
  label: "Notes",
  ariaLabel: "notes",
  icon: GiScrollQuill,
  component: <p>Notes</p>,
  shownToUserRoles: ["dm", "player"],
  shownDuringCampaignMode: ["combat", "out-of-combat"],
};

export const logWidget: Widget = {
  label: "Log",
  ariaLabel: "log",
  icon: GiScrollUnfurled,
  component: <EventLog />,
  shownToUserRoles: ["dm", "player"],
  shownDuringCampaignMode: ["combat", "out-of-combat"],
};

export const npcCreatureWidget: Widget = {
  label: "NPCs and Creatures",
  ariaLabel: "npcs and creatures",
  icon: GiPerson,
  component: <p>Coming soon...</p>,
  shownToUserRoles: ["dm"],
  shownDuringCampaignMode: ["combat", "out-of-combat"],
};

export const charactersWidget: Widget = {
  label: "Adventuring Party",
  ariaLabel: "party",
  icon: FaUsers,
  component: <Party />,
  shownToUserRoles: ["dm", "player"],
  shownDuringCampaignMode: ["combat", "out-of-combat"],
};
export const audioManagerWidget: Widget = {
  label: "Audio Manager",
  ariaLabel: "audio manager",
  icon: FaVolumeUp,
  component: <AudioManager />,
  shownToUserRoles: ["dm"],
  shownDuringCampaignMode: ["combat", "out-of-combat"],
};
export const campaignSettingsWidget: Widget = {
  label: "Campaign Settings",
  ariaLabel: "campaign settings",
  icon: GiSettingsKnobs,
  component: <p>In progress...</p>,
  shownToUserRoles: ["dm"],
  shownDuringCampaignMode: ["combat", "out-of-combat"],
};
