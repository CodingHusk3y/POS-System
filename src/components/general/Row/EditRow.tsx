import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import { Row } from 'react-table';
import { DummyData } from '@/pages/Staff';

type RowProps  = { 
    isReadOnly: boolean;
    row: Row<DummyData & {
        actions?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    }>;
    handleEditButton: (row: Row<DummyData & {
        actions?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    }>) => void;
    link: string;
    handleSaveButton: () => void;
    handleCancelButton: () => void;
}

const EditRow = (props: RowProps) => {
    return (
    <tr {...props.row.getRowProps()}>
        {props.row.cells.map((cell: any) => {
            return (
                <td {...cell.getCellProps()}>
                    {props.isReadOnly ? (
                        cell.column.Header === 'Actions' ? (
                            <>
                            <EditIcon
                                sx={{
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                }}
                                color='success'
                                onClick={() => props.handleEditButton(cell.row)}
                            />
                            <Link to={props.link}>
                                <VisibilityIcon
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    color='success'
                                />
                            </Link>
                            </>
                        ) : (
                            cell.render('Cell')
                        )
                    ) : (
                        cell.column.Header === 'Actions' ? (
                            <>
                            <button 
                                style={{ display: 'inline', alignItems: 'center', cursor: 'pointer' }}
                                onClick={props.handleSaveButton}
                            >
                                <SaveIcon color='success' style={{ verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>Save</span>
                            </button>
                            <button 
                                style={{ display: 'inline', alignItems: 'center', cursor: 'pointer' }}
                                onClick={props.handleCancelButton}
                            >
                                <CancelIcon color='success' style={{ verticalAlign: 'middle' }} />
                                <span style={{ verticalAlign: 'middle' }}>Cancel</span>
                            </button>
                            </>
                        ) : (
                            <input
                                style={{ width: '80%'}}
                                type="text"
                                required={true}
                                placeholder={cell.value}
                                name={cell.column.Header}
                            />
                        )
                    )}
                </td>
            );
        })}
    </tr>
  )
}

export default EditRow