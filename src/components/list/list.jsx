import { listData } from "../../lib/dummyData";
import Card from "../card/card";
import "./list.scss";

const List = () => {
  return (
    <div>
      <div className="list">
        {listData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
