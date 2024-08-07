const SignupForm = () => {
  return (
    <div
      className="not-prose my-6 rounded-lg border-2 border-ds-magenta bg-gray-900 p-4 md:p-5 lg:p-6"
      id="signup"
    >
      <div className="space-y-4 md:space-y-6">
        <p className="text-ds-white text-xl font-semibold">
          Register for the FlakeHub Cache private beta
        </p>

        <form
          action="https://systems.us21.list-manage.com/subscribe/post?u=219191dcbd71bd0a5da006aed&amp;id=da3f9b6422&amp;f_id=00a5e7e1f0"
          method="POST"
          className="relative flex"
          x-ph-capture-trigger="submit"
          x-ph-capture-event="subscribe-private-beta"
        >
          <input type="hidden" name="FHBETA" value="yes" />

          <div className="flex flex-col gap-4 md:flex-row md:gap-0">
            <div className="flex border border-ds-violet">
              <input
                placeholder="Email address"
                type="email"
                name="EMAIL"
                className="placeholder-font-semibold focus:bg-ds-white bg-transparent px-4 py-2 placeholder-white focus:text-ds-sky-blue md:px-5 md:py-3"
              />
            </div>
            <div className="self-star flex md:border md:border-ds-violet">
              <button
                type="submit"
                className="duration-hover bg-ds-violet px-4 py-2 text-center font-extrabold transition-colors hover:text-ds-gray-lightest md:px-5 md:py-3"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
