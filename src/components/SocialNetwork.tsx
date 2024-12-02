interface SocialNetworkProps {
  title: string;
  link: string;
}

const SocialNetwork = ({ title, link }: SocialNetworkProps) => {
  return (
    <a href={link} target="blank">
      <button
        type="button"
        className="btn btn-secondary m-2"
        style={{ width: "20rem" }}
      >
        {title}
      </button>
    </a>
  );
};

export default SocialNetwork;
