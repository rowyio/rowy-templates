const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    if (row.link && row.campaignId && row.campaignSource && row.campaignMedium) {
        const utmLink = encodeURI(row.link + "?utm_id=" + row.campaignId + "+utm_source=" + row.campaignSource + "+utm_medium=" + row.campaignMedium)
        return utmLink;

    }
}