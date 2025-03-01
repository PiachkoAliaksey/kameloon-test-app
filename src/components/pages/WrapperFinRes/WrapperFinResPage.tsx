
import { useEffect, useState } from "react";
import { TTest } from "../../../types";
import { getTest } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardItem from "../Dashboard/ListItem/CardItem/CardItem";
import imgChevron from "../../../assets/Chevron.svg";

import './styles.scss';

const WrapperFinResPage = ({ title, subtitle }: { title: string, subtitle: string }) => {

  const [testData, setTestData] = useState<TTest>();
  const { testId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function getDataTest(id: number) {
      const res = await getTest(id);
      setTestData(res)
    }
    getDataTest(Number(testId?.slice(1)))
  }, [])

  return (
    <div className='wrapper-finalize'>
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="wrapper-card">
        {testData && <CardItem id={testData.id} type={testData.type} name={testData.name} site={testData.status} status={testData.status} />}
      </div>

      <div className='btn-back' onClick={() => navigate(-1)}>
        <img src={imgChevron} alt='img-chevron' />Back</div>
    </div>
  )
}

export default WrapperFinResPage;