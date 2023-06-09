import PropTypes from 'prop-types';

const HeartIcon = ({ isFavorite = false }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill={isFavorite ? '#F59256' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_106_878)">
        <g filter="url(#filter1_b_106_878)">
          <path
            d="M8 3C4.6868 3 2 5.73373 2 9.10648C2 11.8291 3.05 18.2909 13.3856 24.8229C13.5707 24.9387 13.7833 25 14 25C14.2167 25 14.4293 24.9387 14.6144 24.8229C24.95 18.2909 26 11.8291 26 9.10648C26 5.73373 23.3132 3 20 3C16.6868 3 14 6.70089 14 6.70089C14 6.70089 11.3132 3 8 3Z"
            fill="white"
            fillOpacity="0.6"
          />
          <path
            d="M8 3C4.6868 3 2 5.73373 2 9.10648C2 11.8291 3.05 18.2909 13.3856 24.8229C13.5707 24.9387 13.7833 25 14 25C14.2167 25 14.4293 24.9387 14.6144 24.8229C24.95 18.2909 26 11.8291 26 9.10648C26 5.73373 23.3132 3 20 3C16.6868 3 14 6.70089 14 6.70089C14 6.70089 11.3132 3 8 3Z"
            stroke="#F59256"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_106_878"
          x="-100"
          y="-100"
          width="228"
          height="228"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_106_878"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_106_878"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_106_878"
          x="-3"
          y="-2"
          width="34"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_106_878"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_106_878"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HeartIcon;

HeartIcon.propTypes = {
  isFavorite: PropTypes.bool,
};
