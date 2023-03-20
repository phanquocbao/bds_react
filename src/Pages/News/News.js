import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box  } from "@chakra-ui/react";
import useNews from "../../hook/useNews";
import { Link } from "react-router-dom";
function News() {
    const {
        tintuc
        ,getAnh
      } = useNews();
  return (
    <>
     <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      <div className="new">
        <h2 className="text-regal-blue text-xl uppercase font-bold">
            Tin Tuc
        </h2>
        <div className="grid grid-cols-3 gap-4">
            {tintuc.filter(((_, index) => index < 12)).map((t,index)=>{return(
                <Box w='100%'>
                <div className="">
                    <img className="h-[150px] w-[100%]" src={getAnh(index)} alt={t.title.rendered} />
                    <h3 className="text-lg text-regal-blue font-medium hover:text-orange leading-none mb-2 mt-2">
                        <Link to={t.slug}>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: t.title.rendered,
                            }}
                          />
                        </Link>
                      </h3>
                    <p className="text-sm des-tin" dangerouslySetInnerHTML={{ __html: t.excerpt.rendered }} />
                </div>
            </Box>
            )})}
            
        </div>
      </div>
    </>
  );
}

export default News;
