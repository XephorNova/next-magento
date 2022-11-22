import {
  Navbar,
  Dropdown,
  Button,
  Link as NextUILink,
  Text,
  Loading,
} from "@nextui-org/react";
import { AcmeLogo } from "./Logo";
import { icons, SearchIcon } from "./icons";
import { useGetAllCategoriesQuery } from "../../graphql/__generated__/types_and_hooks";
import { Input } from "@nextui-org/react";
import Link from "next/link";

export default function NavbarComponent() {
  const { data, loading, error } = useGetAllCategoriesQuery();

  if (loading) {
    return <Loading />;
  }
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand>
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button
              auto
              light
              css={{
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
              }}
              iconRight={icons.chevron}
              ripple={false}
            >
              Categories
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="ACME features"
            css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "70px",
              "& .nextui-dropdown-item": {
                py: "$4",
                // dropdown item left icon
                svg: {
                  color: "$secondary",
                  mr: "$4",
                },
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                  w: "100%",
                  fontWeight: "$semibold",
                },
              },
            }}
          >
            {data?.categories?.items[0]?.children.map((_data) => {
              return (
                <Dropdown.Item key={_data?.name} textValue={_data?.url_key}>
                  <Link
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    href={{
                      pathname: `/category/${_data?.url_key}?id=${_data?.id}`,
                      query: {
                        id: _data?.id,
                        url_path: [..._data?.url_key],
                      },
                    }}
                    as={`/category/${_data?.url_key}?id=${_data?.id}`}
                    prefetch={true}
                  >
                    {_data?.name}
                  </Link>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Link isActive href="#">
          Blogs
        </Navbar.Link>
        <Navbar.Link href="#">Support</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item
          hideIn={"xs"}
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {data?.categories?.items[0]?.children.map((item, index) => (
          <Navbar.CollapseItem
            key={item?.id}
            activeColor="warning"
            isActive={index === 2}
          >
            <Link color="inherit" href={"/category/" + item?.url_key}>
              {item?.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
