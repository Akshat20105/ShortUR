import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../Helpers/Constant';
import { FaCopy, } from "react-icons/fa"; 

interface IDataTableProps {
    data: UrlData[];
    updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const{ data } = props;
    const CopytoClipboard = async(url: string) => {
        try {
            await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
            alert("Copied to clipboard: " + `${serverUrl}/shortUrl/${url}`);
        }
        catch (err) {
            console.error("Failed to copy: ", err);
        }
    }
    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr key={String(item._id)} className='text-sm border border-amber-50 bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white'>
                    <td className='px-6 py-4 break-words text-wrap'>
                        <Link to={`${item.fullUrl}`} target="_blank" rel="noreferrer noopener">{item.fullUrl}</Link>
                    </td>
                    <td className='px-6 py-4'>
                        <Link to={`${serverUrl}/shortUrl/${item.shortUrl}`} target="_blank" rel="noreferrer noopener">{item.shortUrl}</Link>
                    </td>
                    <td className='px-6 py-4'>{`${item.clicks}`}</td>
                    <td className='px-6 py-4 justify-between'><div onClick={() => CopytoClipboard(`${item.shortUrl}`)}><FaCopy className='text-2xl'/></div></td>

                </tr>
            );
        })
    }
  return (
    <div className='container mx-auto pt-2 pb-10'>
        <div className='relative overflow-x-auto shadow-sm sm:rounded-2xl'>
            <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-2xl'>
                <thead className='text-md uppercase bg-blue-700'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-6/12 text-white'>full Url</th>
                        <th scope='col' className='px-6 py-3 w-3/12  text-white'>short Url</th>
                        <th scope='col' className='px-6 py-3   text-white'>Clicks</th>
                        <th scope='col' className='px-6 py-3   text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>{renderTableData()}</tbody>
            </table>
        </div>
    </div>
  )
};

export default DataTable;
