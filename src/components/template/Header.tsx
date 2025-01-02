import classNames from "classnames";
import { HEADER_HEIGHT_CLASS } from "@/constants/theme.constant";
import type { ReactNode } from "react";
import type { CommonProps } from "@/@types/common";
import useResponsive from "@/utils/hooks/useResponsive";
import Input from "@/components/ui/Input";
import { HiOutlineSearch } from "react-icons/hi";

interface HeaderProps extends CommonProps {
  headerStart?: ReactNode;
  headerEnd?: ReactNode;
  headerMiddle?: ReactNode;
  container?: boolean;
}

const Header = (props: HeaderProps) => {
  const { headerStart, headerEnd, headerMiddle, className, container } = props;
  const { smaller } = useResponsive();

  return (
    <header className={classNames("header flex-col md:flex-row", className)}>
      <div
        className={classNames(
          "header-wrapper",
          HEADER_HEIGHT_CLASS,
          container && "container mx-auto"
        )}
      >
        <div
          className={`header-action header-action-start ${
            smaller.md && "w-full"
          }`}
        >
          {headerStart}
        </div>
        {headerMiddle && (
          <div className="header-action header-action-middle">
            {headerMiddle}
          </div>
        )}
        <div className="header-action header-action-end">{headerEnd}</div>

      </div>
        <Input
          size="sm"
          placeholder="Search for something"
          prefix={
            <HiOutlineSearch color="#718EBF" size={22} className="text-lg ms-2" />
          }
          onChange={() => {}}
          className="header-search header__saerch"
        />
    </header>
  );
};

export default Header;
