import DropdownBlogLinks from "../DropdownBlogLinks/DropdownBlogLinks";
import DropdownHomeLInks from "../DropdownHomeLinks/DropdownHomeLInks";
import DropdownPagesLinks from "../DropdownPageslinks.jsx/DropdownPagesLinks";
import DropdownShopLinks from "../DropdownShopLinks/DropdownShopLinks";

const DropdownLinks = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <DropdownHomeLInks></DropdownHomeLInks>
      <DropdownPagesLinks> </DropdownPagesLinks>
      <DropdownShopLinks></DropdownShopLinks>
      <DropdownBlogLinks></DropdownBlogLinks>
    </div>
  );
};

export default DropdownLinks;
