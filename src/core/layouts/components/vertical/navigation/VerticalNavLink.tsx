// ** React Imports
import { ElementType, ReactNode } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Imports
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";

// ** Configs Import
import themeConfig from "@/core/configs/themeConfig";

// ** Types

// ** Custom Components Imports

// ** Utils
import { handleURLQueries } from "@/core/layouts/utils";
import UserIcon from "@/components/layouts/components/UserIcon";
import { NavLink } from "@/core/layouts/types";
import { Settings } from "@/core/context/settingsContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  item: NavLink;
  settings: Settings;
  navVisible?: boolean;
  toggleNavVisibility: () => void;
}

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & {
    component?: ElementType;
    target?: "_blank" | undefined;
  }
>(({ theme }) => ({
  width: "100%",
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: "opacity .25s ease-in-out",
  "&.active, &.active:hover": {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
  },
  "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
    color: `${theme.palette.common.white} !important`,
  },
}));

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
});

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  // ** Hooks
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const IconTag: ReactNode = item.icon as ReactNode;

  const isNavLinkActive = () => {
    if (pathname === item.path) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{ mt: 1.5, px: "0 !important" }}
    >
      <Link
        passHref
        href={item.path === undefined ? "/" : `${item.path}`}
        style={{ width: "100%" }}
      >
        <MenuNavLink
          component={"span"}
          className={isNavLinkActive() ? "active" : ""}
          {...(item.openInNewTab ? { target: "_blank" } : null)}
          onClick={(e) => {
            if (item.path === undefined) {
              e.preventDefault();
              e.stopPropagation();
            }
            if (navVisible) {
              toggleNavVisibility();
            }
          }}
          sx={{
            pl: 5.5,
            ...(item.disabled
              ? { pointerEvents: "none" }
              : { cursor: "pointer" }),
          }}
        >
          <ListItemIcon
            sx={{
              mr: 2.5,
              color: "text.primary",
              transition: "margin .25s ease-in-out",
            }}
          >
            <UserIcon icon={IconTag} />
          </ListItemIcon>

          <MenuItemTextMetaWrapper>
            <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>
              {item.title}
            </Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || "primary"}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  "& .MuiChip-label": { px: 1.5, textTransform: "capitalize" },
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  );
};

export default VerticalNavLink;
