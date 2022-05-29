import {
  Flex,
  Box,
  VStack,
  Tooltip,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaSignOutAlt, FaUsers, FaVolumeUp } from "react-icons/fa";
import { GiScrollQuill, GiScrollUnfurled } from "react-icons/gi";
import { AudioManager } from "./AudioManager";
import { EventLog } from "./EventLog";
import Party from "./Party";
import { Link as ReactRouterLink } from "react-router-dom";
import { CampaignUserContext } from "../../CampaignDashboardPage";

type NavbarItem = {
  label: string;
  ariaLabel: string;
  icon: JSX.Element;
  component: JSX.Element;
  shownToUserRoles: ("dm" | "player")[];
};

export function Sidebar() {
  const [activeNavbarItemIndex, setActiveNavbarItemIndex] = useState<
    number | null
  >(null);

  const { userRole } = useContext(CampaignUserContext);

  const navbarItems: NavbarItem[] = [
    {
      label: "Notes",
      ariaLabel: "notes",
      icon: <GiScrollQuill />,
      component: <p>Notes</p>,
      shownToUserRoles: ["dm", "player"],
    },
    {
      label: "Event Log",
      ariaLabel: "event log",
      icon: <GiScrollUnfurled />,
      component: <EventLog />,
      shownToUserRoles: ["dm", "player"],
    },
    {
      label: "Adventuring Party",
      ariaLabel: "party",
      icon: <FaUsers />,
      component: <Party />,
      shownToUserRoles: ["dm", "player"],
    },
    {
      label: "Audio Manager",
      ariaLabel: "audio manager",
      icon: <FaVolumeUp />,
      component: <AudioManager />,
      shownToUserRoles: ["dm"],
    },
  ];

  return (
    <Flex align="center">
      <Box
        as="nav"
        p="3"
        bgColor="gray.500"
        borderTopRightRadius="base"
        borderBottomRightRadius="base"
      >
        <VStack>
          {navbarItems
            .filter((item) => item.shownToUserRoles.includes(userRole))
            .map((item, index) => (
              <Tooltip key={item.label} label={item.label} placement="right">
                <IconButton
                  icon={item.icon}
                  aria-label={item.ariaLabel}
                  onClick={() => setActiveNavbarItemIndex(index)}
                />
              </Tooltip>
            ))}
          <Tooltip label="Exit to home" placement="right">
            <IconButton
              as={ReactRouterLink}
              icon={<FaSignOutAlt />}
              aria-label="exit"
              colorScheme="pink"
              variant="ghost"
              to={"/"}
            />
          </Tooltip>
        </VStack>
      </Box>
      <Box></Box>

      {activeNavbarItemIndex !== null && navbarItems[activeNavbarItemIndex] && (
        <Drawer
          isOpen={activeNavbarItemIndex !== null}
          placement="left"
          size="md"
          onClose={() => setActiveNavbarItemIndex(null)}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontSize="3xl">
              {navbarItems[activeNavbarItemIndex].label}
            </DrawerHeader>

            <DrawerBody>
              {navbarItems[activeNavbarItemIndex].component}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Flex>
  );
}
