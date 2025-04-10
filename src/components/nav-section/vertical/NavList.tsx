import { useEffect, useState } from "react";
import useActiveLink from "../../../hooks/useActiveLink";
import NavItem from "./NavItem";
import { Collapse } from "@mui/material";
import { useLocation } from "react-router";

interface NavListProps {
  data: any;
  depth: number;
  hasChild: boolean;
}

const NavList = ({ data, depth, hasChild }: NavListProps) => {
  const { pathname } = useLocation();
  const { active, isExternalLink } = useActiveLink(data.path);
  const [open, setOpen] = useState(active);
  useEffect(() => {
    if (!active) {
      handleClose();
    }
  }, [pathname]);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.children} depth={depth} />
        </Collapse>
      )}
    </>
  );
};

interface NavSubListProps {
  data: any;
  depth: number;
}

const NavSubList = ({ data, depth }: NavSubListProps) => {
  return (
    <>
      {data.map((list: any) => (
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
