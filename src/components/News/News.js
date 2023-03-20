import { Link } from "react-router-dom";
import useNews from "../../hook/useNews";

function News() {
  const {
    tintuc,getAnh
  } = useNews();

  return (
    <>
      <div className="new">
        <div className="">
          <h2 className="text-regal-blue text-xl uppercase font-bold">
            Tin bất động sản
          </h2>
        </div>
        <div className=" mt-4">
          <div className="flex justify-between flex-row">
            <div className="basis-1/2 mr-3">
              {tintuc
                .filter((_, index) => index < 1)
                .map((t, index) => {
                  return (
                    <div>
                      <Link>
                        <img className="w-full rounded-md" src={getAnh(index)} alt="" />
                      </Link>
                      <h3 className="text-lg text-regal-blue font-medium hover:text-orange leading-none mb-2 mt-2">
                        <Link to={t.slug}>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: t.title.rendered,
                            }}
                          />
                        </Link>
                      </h3>
                      <p
                        className="text-sm des-tin"
                        dangerouslySetInnerHTML={{ __html: t.excerpt.rendered }}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="basis-1/2">
              {tintuc
                .filter((_, index) => index < 3)
                .map((t, index) => {
                  return (
                    <div key={t.id} className="flex justify-between mb-2">
                      <div>
                        <img
                          className="max-w-[150px] mr-2 rounded-md"
                          src={getAnh(index)}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h3 className="text-lg text-regal-blue font-medium hover:text-orange leading-none mb-2">
                          <Link to={t.slug}>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: t.title.rendered,
                              }}
                            />
                          </Link>
                        </h3>
                        <p
                          className="text-sm des-tin"
                          dangerouslySetInnerHTML={{
                            __html: t.excerpt.rendered,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
