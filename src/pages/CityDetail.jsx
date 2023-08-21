import { useParams } from 'react-router-dom'

export default function CityDetail() {
  const { city_id } = useParams()
  return (
    <div>Details of city {city_id} are under construction</div>
  )
}
