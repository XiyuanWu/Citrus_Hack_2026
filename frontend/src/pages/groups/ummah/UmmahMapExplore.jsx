import { useCallback, useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import LandingHeader from "../../../components/LandingHeader";
import {
  UMMAH_CATEGORIES,
  getDirectionsUrl,
  placesForCategory,
} from "../../../data/communityPlaces/ummahPlaces";

const defaultCenter = { lat: 33.9737, lng: -117.3281 };
const mapContainerStyle = { width: "100%", height: "100%" };

function PlaceCard({
  place,
  isSelected,
  onSelect,
}) {
  return (
    <article
      id={`ummah-place-${place.id}`}
      className={`rounded-xl border bg-white p-4 shadow-sm transition ${
        isSelected
          ? "border-[#f2b617] ring-2 ring-[#f2b617]/40"
          : "border-[#b8c6df] hover:border-[#12326b]/40"
      }`}
    >
      <div className="mb-3 overflow-x-auto overscroll-x-contain pb-1">
        <div className="flex snap-x snap-mandatory gap-2 pb-1">
          {place.photos.map((src, i) => (
            <img
              key={`${place.id}-ph-${i}`}
              src={src}
              alt={`${place.name} — photo ${i + 1}`}
              className="h-36 w-52 shrink-0 snap-center rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={onSelect}
        className="w-full text-left"
      >
        <h3 className="font-display text-lg font-bold text-[#0f2f69]">
          {place.name}
        </h3>
        {place.address ? (
          <p className="mt-1 font-sans text-sm text-[#314a74]">{place.address}</p>
        ) : null}
      </button>
      <p className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#3b4f77]">
        {place.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={getDirectionsUrl(place)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#0f2f69] px-4 py-2 font-display text-sm font-bold text-white transition hover:bg-[#0b2453]"
          onClick={(e) => e.stopPropagation()}
        >
          Directions
        </a>
        {place.googleMapLink ? (
          <a
            href={place.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#0f2f69] bg-white px-4 py-2 font-display text-sm font-bold text-[#0f2f69] transition hover:bg-[#eef3fb]"
            onClick={(e) => e.stopPropagation()}
          >
            Map link
          </a>
        ) : null}
        {place.website ? (
          <a
            href={place.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#b8c6df] bg-white px-4 py-2 font-display text-sm font-bold text-[#314a74] transition hover:bg-[#eef3fb]"
            onClick={(e) => e.stopPropagation()}
          >
            Website
          </a>
        ) : null}
      </div>
    </article>
  );
}

function MapPlaceholder() {
  return (
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#dbe6f8] to-[#c8d9f2] p-6 text-center">
      <p className="font-display text-lg font-bold text-[#0f2f69]">
        Map preview
      </p>
      <p className="max-w-sm font-sans text-sm text-[#314a74]">
        Add{" "}
        <code className="rounded bg-white/80 px-1.5 py-0.5 text-[#0f2f69]">
          VITE_GOOGLE_MAPS_API_KEY
        </code>{" "}
        to a{" "}
        <code className="rounded bg-white/80 px-1.5 py-0.5 text-[#0f2f69]">
          .env
        </code>{" "}
        file in <code className="rounded bg-white/80 px-1.5">frontend/</code>{" "}
        and restart the dev server. Places and directions links below still work.
      </p>
    </div>
  );
}

function GoogleMapPanel({
  apiKey,
  places,
  selectedPlaceId,
  onMarkerClick,
}) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    id: "ummah-google-maps",
  });
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map || !window.google?.maps) return;
    if (selectedPlaceId) {
      const place = places.find((p) => p.id === selectedPlaceId);
      if (place) {
        map.panTo({ lat: place.lat, lng: place.lng });
        map.setZoom(16);
      }
      return;
    }
    if (!places.length) return;
    const bounds = new window.google.maps.LatLngBounds();
    places.forEach((p) =>
      bounds.extend({ lat: p.lat, lng: p.lng }),
    );
    map.fitBounds(bounds, 72);
  }, [map, places, selectedPlaceId]);

  const onLoad = useCallback((m) => setMap(m), []);

  if (loadError) {
    return (
      <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 bg-[#eef3fb] p-6 text-center font-sans text-sm text-[#314a74]">
        <p className="font-display font-bold text-[#0f2f69]">
          Could not load Google Maps
        </p>
        <p className="max-w-md">
          If the console shows{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-[#0f2f69]">
            ApiNotActivatedMapError
          </code>
          , enable the{" "}
          <strong>Maps JavaScript API</strong> for the same Google Cloud project
          as your API key:{" "}
          <span className="whitespace-nowrap">
            APIs &amp; Services → Library → search “Maps JavaScript API” →
            Enable
          </span>
          . Billing must be enabled on the project. Then reload this page.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center bg-[#eef3fb] font-sans text-[#314a74]">
        Loading map…
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={defaultCenter}
      zoom={13}
      onLoad={onLoad}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      }}
    >
      {places.map((place) => (
        <Marker
          key={place.id}
          position={{ lat: place.lat, lng: place.lng }}
          title={place.name}
          onClick={() => onMarkerClick(place.id)}
          zIndex={selectedPlaceId === place.id ? 1000 : 1}
        />
      ))}
    </GoogleMap>
  );
}

export default function UmmahMapExplore() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";
  const [categoryId, setCategoryId] = useState(UMMAH_CATEGORIES[0].id);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const places = useMemo(
    () => placesForCategory(categoryId),
    [categoryId],
  );

  const handleCategory = (id) => {
    setCategoryId(id);
    setSelectedPlaceId(null);
  };

  const selectPlace = (id) => {
    setSelectedPlaceId(id);
  };

  useEffect(() => {
    if (!selectedPlaceId) return;
    const el = document.getElementById(`ummah-place-${selectedPlaceId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selectedPlaceId]);

  return (
    <main className="flex min-h-screen flex-col bg-[#eef3fb]">
      <LandingHeader />
      <div className="shrink-0 border-b border-[#b7c7e1] bg-white px-6 py-5 md:px-10">
        <h1 className="font-display text-3xl font-bold tracking-tight text-[#0f2f69] md:text-4xl">
          Ummah — campus &amp; community map
        </h1>
        <p className="mt-2 max-w-3xl font-sans text-base leading-relaxed text-[#314a74]">
          Choose a category, explore places on the map, and open any listing in
          Google Maps for turn-by-turn directions. Photos scroll horizontally on
          each card.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center text-sm font-bold text-[#0f2f69] underline-offset-4 hover:underline"
        >
          ← Back to home
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="relative min-h-[42vh] w-full flex-1 md:min-h-[calc(100vh-14rem)]">
          {apiKey ? (
            <GoogleMapPanel
              apiKey={apiKey}
              places={places}
              selectedPlaceId={selectedPlaceId}
              onMarkerClick={selectPlace}
            />
          ) : (
            <MapPlaceholder />
          )}
        </div>

        <aside className="flex max-h-[55vh] w-full shrink-0 flex-col border-t border-[#b7c7e1] bg-white md:max-h-none md:w-[min(100%,440px)] md:border-l md:border-t-0 md:max-h-[calc(100vh-14rem)]">
          <div className="shrink-0 border-b border-[#e3eaf5] p-4">
            <p className="font-display text-xs font-bold uppercase tracking-wide text-[#314a74]">
              Category
            </p>
            <div className="mt-2 flex flex-wrap gap-2 md:flex-wrap">
              {UMMAH_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleCategory(c.id)}
                  className={`shrink-0 rounded-full px-3 py-1.5 font-display text-sm font-bold transition ${
                    categoryId === c.id
                      ? "bg-[#0f2f69] text-white"
                      : "bg-[#eef3fb] text-[#0f2f69] hover:bg-[#dbe6f8]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <div className="space-y-4 pb-6">
              {places.length === 0 ? (
                <p className="font-sans text-sm text-[#314a74]">
                  No places listed for this category yet.
                </p>
              ) : (
                places.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    isSelected={selectedPlaceId === place.id}
                    onSelect={() => selectPlace(place.id)}
                  />
                ))
              )}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
