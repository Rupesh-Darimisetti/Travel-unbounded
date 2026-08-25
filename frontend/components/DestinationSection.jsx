import DestinationCard from "./DestinationCard";

export default function DesitnationSection({ destinations }) {
    return (
        <section className="destination-section"> 
        <div className="destination-grid">
            {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
            ))}
        </div>
        </section>
    );
}