import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import { serverUrl } from "../../Helpers/Constant";
import DataTable from "../DataTable/DataTable";
import axios from "axios";

const Container: React.FunctionComponent = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);
  const updateReloadState = ():void => {
    setReload(true);
  };
  const fetchTableData =async () => {
    const response = await axios.get(`${serverUrl}/shorturl`);
    console.log(response.data);
    setData(response.data);
    console.log(data);
    setReload(false);
  }
  React.useEffect(() => {
    fetchTableData();
  },[reload]);
  return (
    <div >
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </div>
  );
};

export default Container;
