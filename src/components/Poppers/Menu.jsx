import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import Button from "../Button";
import HeaderSubnav from "./HeaderSubnav";
import classNames from "classnames/bind";
import styles from "../../assets/style/components/_menu.scss";
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [] }, onChange = defaultFn) {
    const [renderSubnav, setRenserSubnav] = useState([{ data: items }]);
    const subnavCurrent = renderSubnav[renderSubnav.length - 1];

    const renderItems = () => {
        return subnavCurrent.data.map((item, index) => {
            const isSubnav = !!item.subnav;
            // console.log(item.subnav);

            return (
                <Button
                    to={item.to}
                    key={index}
                    className={cx("nav_sub--item", {
                        icon_left: item.iconLeft,
                        icon_right: item.iconRight,
                        separate: item.separate,
                    })}
                    styleButton={false}
                    iconRight={item.iconRight}
                    iconLeft={item.iconLeft}
                    onClick={() => {
                        if (isSubnav) {
                            setRenserSubnav((prev) => {
                                return [...prev, item.subnav];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                >
                    {item.title}
                </Button>
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement="bottom-start"
            render={(attrs) => (
                <div className="nav_sub" tabIndex="-1" {...attrs}>
                    {renderSubnav.length > 1 && (
                        <HeaderSubnav
                            titleHeader={subnavCurrent.titleHeader}
                            onBack={() => {
                                setRenserSubnav((prev) =>
                                    prev.slice(0, prev.length - 1)
                                );
                            }}
                        />
                    )}

                    {renderItems()}
                </div>
            )}
            onHide={() => setRenserSubnav((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
