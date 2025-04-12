import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useActiveLink from "../../../hooks/useActiveLink";
import NavItem from "./NavItem";
import { StyledPopover } from "./styles";

interface NavListProps {
  data: any;
  depth: number;
  hasChild: boolean;
}

const NavList = ({ data, depth, hasChild }: NavListProps) => {
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const { active, isExternalLink } = useActiveLink(data.path);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      handleClose();
    }
  }, [pathname]);

  useEffect(() => {
    const appBarEl = Array.from(document.querySelectorAll(".MuiAppBar-root"));
    const styles = () => {
      document.body.style.overflow = "";
      document.body.style.padding = "";
      appBarEl.forEach((elem: any) => {
        elem.style.padding = "";
      });
    };
    if (open) {
      styles();
    } else {
      styles();
    }
  }, [open]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        ref={navRef}
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleOpen}
      />

      {hasChild && (
        <StyledPopover
          open={open}
          anchorEl={navRef.current}
          anchorOrigin={{ vertical: "center", horizontal: "right" }}
          transformOrigin={{ vertical: "center", horizontal: "left" }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          <NavSubList data={data.children} depth={depth} />
        </StyledPopover>
      )}
    </>
  );
};

export default NavList;

interface NavSubListProps {
  data: Array<any>;
  depth: number;
}

const NavSubList = ({ data, depth }: NavSubListProps) => {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
        />
      ))}
    </>
  );
};
