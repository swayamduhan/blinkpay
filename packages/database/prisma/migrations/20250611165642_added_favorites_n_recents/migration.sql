-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "fav_user_id" INTEGER NOT NULL,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recent_recipients" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "frequency" INTEGER NOT NULL DEFAULT 1,
    "lastSentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recent_recipients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "recent_recipients_user_id_idx" ON "recent_recipients"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "recent_recipients_user_id_receiver_id_key" ON "recent_recipients"("user_id", "receiver_id");

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fav_user_id_fkey" FOREIGN KEY ("fav_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recent_recipients" ADD CONSTRAINT "recent_recipients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recent_recipients" ADD CONSTRAINT "recent_recipients_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
