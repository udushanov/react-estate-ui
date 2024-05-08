import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import Map from "../../components/map/map";
import { listData } from "../../lib/dummyData";
import "./listPage.scss";

const ListPage = () => {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {listData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={listData} />
      </div>
    </div>
  );
};

export default ListPage;
