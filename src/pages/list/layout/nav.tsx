import React from "react";
import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getSetting } from "../context";
import usePath from "~/hooks/usePath";

const Nav = () => {
  const location = useLocation();
  const lpath = usePath();
  const { t } = useTranslation();
  return (
    <Breadcrumb spacing="1" className="nav" w="full" px="2">
      <BreadcrumbItem>
        <BreadcrumbLink
          _hover={{
            textDecoration: "none",
            bg: "rgba(132,133,141,0.18)",
          }}
          p="1"
          rounded="lg"
          as={Link}
          to={"" + localStorage.getItem("DEPLOY_PATH")}
        >
          {getSetting("home emoji")}{t("Home")}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {lpath.pathname
        .slice(1)
        .split("/")
        .map((path, index) => {
          const isLast = index === lpath.pathname.split("/").length - 2;
          const pathname = lpath.pathname
            .split("/")
            .slice(0, index + 2)
            .join("/");
          return (
            <BreadcrumbItem key={pathname} isCurrentPage={isLast}>
              <BreadcrumbLink
                isCurrentPage={isLast}
                wordBreak="break-word"
                as={isLast ? undefined : Link}
                to={encodeURI(localStorage.getItem("DEPLOY_PATH") + pathname.slice(1))}
                _hover={{
                  textDecoration: "none",
                  bg: "rgba(132,133,141,0.18)",
                }}
                p="1"
                rounded="lg"
              >
                {path}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
    </Breadcrumb>
  );
};

export default Nav;
