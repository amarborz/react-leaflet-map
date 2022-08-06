import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentItem } from '../redux/routesSlice'
import SelectComponent from './SelectComponent'

const columns = [
	{
		title: 'Доставка',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <p>{text}</p>,
		responsive: ['sm'],
	},
	{
		title: 'Откуда',
		dataIndex: 'from',
		key: 'from',
		render: (text, record, index) => (
			<SelectComponent defaultValue={text} from={true} number={index} />
		),
		responsive: ['sm'],
	},
	{
		title: 'Куда',
		dataIndex: 'to',
		key: 'to',
		render: (text, record, index) => (
			<SelectComponent inTable={true} defaultValue={text} number={index} />
		),
		responsive: ['sm'],
	},
]

const TableComponent = () => {
	const dispatch = useDispatch()
	const { currentItem, items } = useSelector((state) => state.routes)

	return (
		<Table
			className="data-table"
			columns={columns}
			dataSource={items}
			onRow={(record) => {
				return {
					onClick: (e) => {
						if (e.target.tagName === 'TD' || e.target.tagName === 'P') {
							dispatch(setCurrentItem(record))
						}
					},
				}
			}}
			rowClassName={(record) => {
				return currentItem?.key === record.key ? 'active' : ''
			}}
			pagination={false}
		/>
	)
}

export default TableComponent
