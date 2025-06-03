import CalendarComponent from "../../features/calendar/Caledar"
import { DateRange } from "@mui/icons-material"

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <CalendarComponent />
          <DateRange />
        </div>
      </section>
    </>
  )
}