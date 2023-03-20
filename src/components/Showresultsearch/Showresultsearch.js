function Showresultsearch(props) {
 const data = props.data
  return (
    <>
      <div className="flex justify-between items-center bg-white px-2 py-2 w-[100%]">
        <div>
          <img
            className="w-24 h-24 rounded-full mr-3"
            src="../../Assets/Images/bds.png"
            alt=""
          />
        </div>
        <div className="text-sm">
          {data !== undefined && data.title !== undefined && data.title}
        </div>
      </div>
    </>
  );
}

export default Showresultsearch;
