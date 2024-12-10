import { Link, useLocation } from "react-router-dom";

const NavigationBreadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  return (
    <div className="mt-7 mb-10 px-[20px]">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb flex flex-wrap space-x-1 md:space-x-2">
          <li className="breadcrumb-item text-gray-500 text-sm md:text-base">
            <Link to="/">Home</Link>
          </li>
          {paths.map((path, index) => {
            const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
            const isLast = index === paths.length - 1;
            return isLast ? (
              <li
                key={index}
                className="breadcrumb-item active-page text-sm md:text-base font-bold truncate max-w-[150px] md:max-w-none"
                aria-current="page"
              >
                {path}
              </li>
            ) : (
              <li
                key={index}
                className="breadcrumb-item text-sm md:text-base truncate max-w-[100px] md:max-w-none"
              >
                <Link to={routeTo}>{path}</Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default NavigationBreadcrumb;
