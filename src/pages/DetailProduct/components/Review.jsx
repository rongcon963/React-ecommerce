import Button from '@components/Button/Button';
import FormItem from './FormItem';
import styles from '../styles.module.scss';

function ReviewProduct() {
  const {
    containerReview,
    reviews,
    noreview,
    replyForm,
    commentReplyTitle,
    commentNode,
    commentFormCookiesConsent,
    btnSubmit
  } = styles;
  return (
    <div className={containerReview}>
      <div className={reviews}>REVIEWS</div>

      <p className={noreview}>There are no reviews yet.</p>

      <div className={replyForm}>
        <div className={commentReplyTitle}>
          BE THE FIRST TO REVIEW "10K YELLOW GOLD"
        </div>

        <p className={commentNode}>
          Your email address will not be published. Required fields are marked
        </p>

        <form action=''>
          {/* RATING */}
          <FormItem label={'Your rating'} isRequired typeChildren={'rating'} />

          {/* REVIEW AREA */}
          <FormItem
            label={'Your review'}
            isRequired
            typeChildren={'textarea'}
          />

          {/* NAME */}
          <FormItem label={'Name'} isRequired typeChildren={'input'} />

          {/* EMAIL */}
          <FormItem label={'Email'} isRequired typeChildren={'input'} />

          <div className={commentFormCookiesConsent}>
            <input type='checkbox' />{' '}
            <span>
              Save my name, email, and website in this browser for <br />
              the next time I comment
            </span>
          </div>

          <div className={btnSubmit}>
            <Button content={'SUBMIT'} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewProduct;
