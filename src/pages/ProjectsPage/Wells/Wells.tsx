import { useFetchWells } from "@features/wells/api/fetchWells";
import { useSitesContext } from "../SitesContext/SitesProvider";
import WellsCard from "@features/wells/Wells";

import ErrorComponent from "@shared/error/ErrorComponent";
import Loading from "@shared/loading/Loading";


import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules";

import styled from "styled-components";

import styles from "../Project.module.scss"



const StyledCarousel = styled.div`
  .swiper {
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    border: 0.3rem solid var(--color-brown-dark);
  }

  .swiper-wrapper {
    display: flex; /* Это уже есть в Swiper по умолчанию */
  }

  .swiper-slide {
    background-color: var(--color-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    max-height: 32rem;
    /* УДАЛИТЬ width: 100vw - это заставляет слайд занимать всю ширину экрана */
    flex-shrink: 0; /* Добавить это */
    width: 100%; /* Слайд будет занимать ширину контейнера Swiper */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
  }
  .swiper:hover [class*="swiper-button"]{
    background-color: var(--color-brown-dark);
    transform: scale(2px);
    opacity: 0.8;
  }
  .swiper-pagination-bullet {
    background-color: #ccc;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #007bff;
  } 
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  } 
  [class*="swiper-button"]{
    transition-duration: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    display: flex;
    color: var(--color-light);
    font-size: 1.5rem;
    background-color: var(--color-brown);
    opacity: 0.7;
    width: 1.5rem;
    height: 4rem;
    border-radius: 0.3rem;
    margin-inline: 0.5rem;
  }
  [class*="swiper-button"]:hover{
    transform: scale(1.4);
  }
  .swiper-button-prev::before{
    content: "<";
    
  }
  .swiper-button-next{
    right: 0;
  }
  .swiper-button-next::before{
    content: ">";
  }
  @media screen and (width < 50rem){
    .swiper-slide{
      filter: blur(0);
    }
    [class*="swiper-button"]{
      width: 1rem;
      height: 3rem;
    }
  }`

export default function Wells() {
  const { sitesId } = useSitesContext();

  const isEnabled = Boolean(
    sitesId &&
    (typeof sitesId === 'string' ? sitesId.trim() : sitesId.length > 0)
  );

  const { data, error, isLoading } = useFetchWells(sitesId ?? "", {
    enabled: isEnabled,
  });

  if (!isEnabled) return <Loading>Ожидание данных</Loading>

  if (error) return <ErrorComponent>{error}</ErrorComponent>

  if (isLoading) return <Loading>Загрузка скважин</Loading>


  function WellsList() {
    if (!data) return
    if (data?.length >= 3) return (
      <>
        <h3 className={styles["wells__title-list"]}>
          Найденно {data.length} скважин
        </h3>
        <ul className={styles.wells__list}>
          {data && <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            navigation> {data?.map((el, index) => (
              <SwiperSlide>
                <WellsCard wellsData={el} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>}
        </ul>
      </>
    )
    return (
      <ul className={styles.wells__list}>
        {data && data?.map((el, index) => (
          <li className="wells__item" key={index}>
            <WellsCard wellsData={el} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <StyledCarousel>
      <section className="wells">
        <h2 className={styles.title}>Скважины</h2>
        <WellsList />
      </section >
    </StyledCarousel>
  );
}